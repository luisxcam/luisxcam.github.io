---
slug: "the-terminal-is-my-ide-a-neovim-setup-guide"
title: "THE TERMINAL IS MY IDE: A NEOVIM SETUP GUIDE"
date: "2026-01-15"
tags: ["neovim", "tooling"]
excerpt: "My battle-tested Neovim configuration for maximum productivity and zero distractions."
coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
---

## Why Neovim in 2026

VS Code won. Everyone knows this. But there's a reason blacksmiths still use hammers — the right tool, shaped to your hand, is faster than any smart tool that thinks it knows better than you.

Neovim with LSP gives you the same completions, diagnostics, and go-to-definition as VS Code. Minus the 500MB Electron shell.

## The Minimal Config

![Neovim with a dark colorscheme](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800)

Start with lazy.nvim as your plugin manager. Everything else is optional.

```lua
-- ~/.config/nvim/init.lua
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({ "git", "clone", "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git", lazypath })
end
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
  { "neovim/nvim-lspconfig" },
  { "nvim-telescope/telescope.nvim" },
  { "nvim-treesitter/nvim-treesitter", build = ":TSUpdate" },
})
```

## The One Keybind That Changes Everything

```lua
vim.keymap.set("n", "<leader>ff", require("telescope.builtin").find_files)
```

Fuzzy find every file in your project, instantly. Once you have this, a file tree feels like a handicap.
