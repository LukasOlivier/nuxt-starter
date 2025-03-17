<template>
    <div class="flex flex-col items-center justify-center h-screen">
		<div class="flex items-center justify-center text-2xl p-4">
        <Icon name="uil:globe" style="color: black" />
        <h1 class="text-blue-500">Hello world!</h1>
        <Icon name="uil:globe" style="color: black" />
    </div>
	<NuxtImg src="/images/hello-world.png" alt="Nuxt Logo" />
	</div>
</template>

<script setup>
    useHead({
        title: 'Home',
        meta: [
            {
                name: 'description',
                content: 'Welcome to the index page of the Nuxt 3 starter project.',
            },
        ],
    });
</script>