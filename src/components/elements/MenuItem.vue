<script setup>

const props = defineProps({
    menu: {
        type: Object,
        required: true
    },
    type: String,
    iconSize: String
})

</script>

<template>
    <a 
        :href="menu.link"
        class="flex items-center gap-[7px]  transition-colors duration-200"
        :class="type === 'primary' ? 'text-primary group-hover:text-white' : type === 'footer' ? 'text-[#DDDDDD] hover:text-primary' :  'px-4 py-2 text-black hover:bg-slate-200'"
    >
        <fa-icon :icon="menu.icon" :class="iconSize"/>
        {{ menu.name }}
        <button v-if="menu.children">
            <fa-icon icon="fa-solid fa-chevron-down"  />
        </button>

        <slot></slot>
    </a>
</template>