import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    // site: process.env.VERCEL_ENV !== 'production' ? "https://docs-teemopay.vercel.app" : "https://docs.teemopay.com",
    integrations: [
        starlight({
            head: [
                {
                    tag: "link",
                    attrs: {rel: "icon", type: "image/png", href: "/favicon.png"}, // 网站图标
                }
            ],
            // 网站左上角标题和右侧 GitHub 链接
            title: 'Teemopay Docs',
            // 用 logo 替换标题
            logo: {
                light: '/src/assets/logo-357.png',
                dark: '/src/assets/logo-371.png',
                replacesTitle: true,
            },
            social: {github: 'https://github.com/teemopay/docs'},
            // 多语言支持
            defaultLocale: 'en', // 默认语言
            locales: {
                en: {label: 'English', lang: 'en',},  // 英文文档
                zh: {label: '中文', lang: 'zh'},  // 中文文档
            },
            // 侧边栏导航
            sidebar: [
                {
                    label: 'Guides',
                    translations: {zh: '指南'},
                    items: [
                        {
                            label: 'Example Guide',
                            translations: {zh: "示例引导"},
                            link: '/guides/example'
                        },
                    ],
                },
                {
                    label: 'Reference',
                    translations: {zh: '参考'},
                    items: [
                        {
                            label: 'Example Reference',
                            translations: {zh: '示例参考'},
                            link: '/reference/example',
                        },
                    ],
                },
            ],
            customCss: ['./src/tailwind.css'],
        }),
        tailwind({applyBaseStyles: false}),
    ],
});
