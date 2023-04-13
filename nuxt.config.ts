// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n: {
        vueI18n: './i18n.config.ts',
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        locales: [
            {
                code: 'en',
                name: 'English'
            },
            {
                code: 'fr',
                name: 'Français'
            }
        ]
    },
})
