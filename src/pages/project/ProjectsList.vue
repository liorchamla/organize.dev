<script lang="ts" setup>
import type { Project } from '@/types/project'
import { Icon } from '@iconify/vue'
import { Card } from 'primevue'
import { ref } from 'vue'

const projects = ref<Project[]>([
  {
    id: 1,
    created_at: '2023-10-01T12:00:00Z',
    created_by: 1,
    title: 'Project One',
  },
  {
    id: 2,
    created_at: '2023-10-02T12:00:00Z',
    created_by: 2,
    title: 'Project Two',
  },
  {
    id: 3,
    created_at: '2023-10-03T12:00:00Z',
    created_by: 1,
    title: 'Project Three',
  },
])
</script>

<template>
  <h1 class="text-2xl font-bold">Mes projets</h1>
  <div class="flex flex-wrap gap-5 mt-10">
    <a
      href="/projects/create"
    >
        <Card class="min-w-[150px]">
            <template #title>Créer un projet</template>
            <template #content>
                <div class="flex items-center justify-center">
                    <Icon icon="mdi:plus" class="text-5xl text-primary" />
                </div>
            </template>
        </Card>
    </a>
    <a :href="`/projects/${project.id}`" v-for="project in projects" :key="project.id">
      <Card>
        <template #title>{{ project.title }}</template>
        <template #content>
          <p class="m-0">Créé le : {{ project.created_at }}</p>
          <p class="m-0">Créé par : {{ project.created_by }}</p>
        </template>
      </Card>
    </a>
  </div>
</template>
