<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
    const description = `Hi, welcome to our nuxt starter site! This project includes all basic needs for almost every project!`;

    const ogTitle = 'Nuxt 3 - Starter project';

    const twitterDescription = `Hi, welcome to our nuxt starter site!`;

    const image = 'https://example.com/default-image.webp';

    const mySite = 'https://example.com';

    useHead({
        htmlAttrs: {
            lang: 'en',
        },
        link: [{ rel: 'canonical', href: mySite }],
        meta: [
            { name: 'description', content: description },
            {
                name: 'keywords',
                content: 'nuxt 3, starter, project',
            },
            { name: 'author', content: 'John Doe' },
            { name: 'publisher', content: 'John Doe' },
            { property: 'og:site_name', content: mySite },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: mySite },
            { property: 'og:title', content: ogTitle },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:url', content: mySite },
            { name: 'twitter:title', content: ogTitle },
            { name: 'twitter:description', content: twitterDescription },
            { name: 'twitter:image', content: image },
        ],
    });
</script>