
<template>
    <div class="bg-primary  w-full flex items-center justify-between p-2">
        <div class="flex items-center justify-center ">
            <a href="/"><img src="@/assets/logo.png" class="max-h-[50px] rounded-xl" alt=""></a>
        </div>
        <nav>
            <ul class="flex items-center gap-4">
                <li><a href="/" class="flex items-center gap-2"><Icon icon="solar:bookmark-broken" /> Mes tickets</a></li>
                <li><a href="/signup" class="flex items-center gap-2"><Icon icon="mdi:account-plus" /> S'inscrire</a></li>
                <li><a href="/signin" class="flex items-center gap-2"><Icon icon="mdi:account" /> Se connecter</a></li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
