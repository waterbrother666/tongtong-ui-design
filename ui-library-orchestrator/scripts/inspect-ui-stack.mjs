#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const requestedRoot = process.argv[2] ?? process.cwd();
const root = path.resolve(requestedRoot);
const packagePath = path.join(root, "package.json");
const componentsConfigPath = path.join(root, "components.json");

if (!fs.existsSync(packagePath)) {
  console.error(`未在 ${packagePath} 找到 package.json`);
  process.exit(1);
}

let pkg;
try {
  pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
} catch (error) {
  console.error(`无法解析 ${packagePath}：${error.message}`);
  process.exit(1);
}

const allDependencies = {
  ...(pkg.dependencies ?? {}),
  ...(pkg.devDependencies ?? {}),
  ...(pkg.peerDependencies ?? {}),
};

const lockfiles = [
  ["pnpm-lock.yaml", "pnpm"],
  ["yarn.lock", "yarn"],
  ["bun.lock", "bun"],
  ["bun.lockb", "bun"],
  ["package-lock.json", "npm"],
].filter(([file]) => fs.existsSync(path.join(root, file)));

const frameworkSignals = [
  ["next", "Next.js"],
  ["react", "React"],
  ["nuxt", "Nuxt"],
  ["vue", "Vue"],
  ["@sveltejs/kit", "SvelteKit"],
  ["svelte", "Svelte"],
  ["astro", "Astro"],
  ["vite", "Vite"],
].filter(([dependency]) => dependency in allDependencies);

const uiSignals = [
  "@ai-sdk/react",
  "ai",
  "gsap",
  "@gsap/react",
  "motion",
  "framer-motion",
  "tailwindcss",
  "three",
  "vgpu",
  "@webgpu/types",
  "recharts",
  "@radix-ui/react-dialog",
  "@base-ui-components/react",
  "@base-ui/react",
  "@headlessui/react",
  "lucide-react",
  "reactflow",
  "@xyflow/react",
].filter((dependency) => dependency in allDependencies);

const existingPaths = [
  "components.json",
  "tailwind.config.js",
  "tailwind.config.ts",
  "src/components",
  "components",
  "src/app",
  "app",
  "src/pages",
  "pages",
].filter((candidate) => fs.existsSync(path.join(root, candidate)));

let componentsConfig = null;
if (fs.existsSync(componentsConfigPath)) {
  try {
    const parsed = JSON.parse(fs.readFileSync(componentsConfigPath, "utf8"));
    componentsConfig = {
      style: parsed.style ?? null,
      base: parsed.base ?? null,
      rsc: parsed.rsc ?? null,
      tsx: parsed.tsx ?? null,
      iconLibrary: parsed.iconLibrary ?? null,
      aliases: parsed.aliases ?? {},
      registries: parsed.registries ?? {},
    };
  } catch (error) {
    componentsConfig = { "解析错误": error.message };
  }
}

const result = {
  "项目根目录": root,
  "包名": pkg.name ?? null,
  "packageManager 字段": pkg.packageManager ?? null,
  "检测到的锁文件": lockfiles.map(([file, manager]) => ({
    "文件": file,
    "包管理器": manager,
  })),
  "框架": Object.fromEntries(
    frameworkSignals.map(([dependency, label]) => [label, allDependencies[dependency]])
  ),
  "UI 相关依赖": Object.fromEntries(
    uiSignals.map((dependency) => [dependency, allDependencies[dependency]])
  ),
  "shadcn 配置": componentsConfig,
  "已存在的关键路径": existingPaths,
  "项目脚本": pkg.scripts ?? {},
};

process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
