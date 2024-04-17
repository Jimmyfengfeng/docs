import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.teemopay.com",
  integrations: [
    starlight({
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            href: "/favicon.png",
          }, // 网站图标
          tag: "link",
          attrs: {
            rel: "sitemap",
            href: "/sitemap-index.xml",
          },
        },
      ],
      // 网站左上角标题和右侧 GitHub 链接
      title: "Teemopay Docs",
      // 用 logo 替换标题
      logo: {
        light: "/src/assets/logo-357.png",
        dark: "/src/assets/logo-371.png",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/teemopay/docs",
      },
      // 多语言支持
      defaultLocale: "en",
      // 默认语言
      locales: {
        en: { label: "English", lang: "en" },
        // 英文文档
        zh: { label: "中文", lang: "zh" }, // 中文文档
      },
      // 侧边栏导航
      sidebar: [
        {
          label: "Introduction",
          translations: { zh: "简介" },
          link: "/introduction",
        },
        {
          label: "changes",
          translations: { zh: "变更" },
          link: "/changes",
        },
        {
          label: "Authentication",
          translations: { zh: "鉴权" },
          link: "/authentication",
        },
        {
          label: "🇲🇽 Mexico",
          translations: { zh: "🇲🇽 墨西哥" },
          items: [
            {
              label: "Payout",
              translations: { zh: "代付" },
              items: [
                {
                  label: "Create Payout",
                  translations: { zh: "创建代付" },
                  link: "/mx/payout/create",
                },
                {
                  label: "Payout callback",
                  translations: { zh: "代付回调" },
                  link: "/mx/payout/callback",
                },
                {
                  label: "Payout Query",
                  translations: { zh: "代付查询" },
                  link: "/mx/payout/query",
                },
                {
                  label: "Bank",
                  translations: { zh: "银行列表" },
                  link: "/mx/payout/bank",
                },
              ],
            },
            {
              label: "Payin",
              translations: { zh: "代收" },
              items: [
                {
                  label: "Create Payin",
                  translations: { zh: "创建代收" },
                  link: "/mx/payin/create",
                },
                {
                  label: "Payin callback",
                  translations: { zh: "代收回调" },
                  link: "/mx/payin/callback",
                },
                {
                  label: "Payin Query",
                  translations: { zh: "代收查询" },
                  link: "/mx/payin/query",
                },
              ],
            },
            {
              label: "Inquire",
              translations: { zh: "查询" },
              items: [
                {
                  label: "Balance Inquire",
                  translations: { zh: "余额查询" },
                  link: "/mx/inquire/balance",
                },
                {
                  label: "Bill Inquiry",
                  translations: { zh: "账单查询" },
                  link: "/mx/inquire/bill",
                },
              ],
            },
          ], // 二级导航
        },
      ],
      // 重新组件
      components: {
        ContentPanel: "/src/components/ContentPanel.astro",
      },
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
