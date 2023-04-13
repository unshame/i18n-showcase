<script setup>
    import {useI18n} from "vue-i18n";

    const { t } = useI18n({
        useScope: 'local'
    });

    provide('pageMeta', {
        title: computed(() => t('subTitle'))
    });

    onMounted(() => {
        useHead({
            title: computed(() => `${t('title')} ${t('subTitle')}`)
        });
    })
</script>

<template>
    <div>
        <h1>
            {{ t('title') }}
            <SubTitle />
        </h1>
        <LanguageSelect />
    </div>
</template>

<i18n lang="json">
{
    "en": {
        "title": "Hello",
        "subTitle": "world"
    },
    "fr": {
        "title": "Bonjour",
        "subTitle": "le monde"
    }
}
</i18n>
