<script lang="ts" setup>
import type { Project } from '@/types/project'
import { Icon } from '@iconify/vue'
import { Card, Tag } from 'primevue'
import { onMounted, ref } from 'vue'

const projects = ref<Project[]>([])

onMounted(async () => {
  try {
    const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:BAx_AcV7/project')
    if (!response.ok) {
      throw new Error('Failed to fetch projects')
    }
    projects.value = await response.json()
  } catch (error) {
    console.error('Error fetching projects:', error)
  }
})

</script>

<template>
  <h1 class="text-2xl font-bold">Mes projets</h1>
  <div class="flex flex-wrap gap-5 mt-10">
    <a
      href="/projects/create"
    >
        <Card class="min-w-[150px]">
            <template #content>
                <div class="flex items-center justify-center">
                    <Icon icon="mdi:plus" class="text-7xl text-primary" />
                </div>
            </template>
        </Card>
    </a>
    <a :href="`/projects/${project.id}`" v-for="project in projects" :key="project.id">
      <Card>
        <template #title>{{ project.title }}</template>
        <template #content>
          <Tag><Icon icon="solar:folder-2-bold-duotone" /> {{  project.epics }} Epics</Tag>
          <Tag class="ml-2"><Icon icon="solar:bookmark-linear" /> {{ project.tasks }} Tickets</Tag>
        </template>
      </Card>
    </a>
  </div>
</template>
