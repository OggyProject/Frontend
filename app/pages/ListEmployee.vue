<script setup lang="js">
import Card from '../components/Card.vue'
import employees from '../Data/employeeData.json'

const avatar = (emp) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(emp.name_en)}&background=0D8ABC&color=fff&size=256`
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold mb-4">บุคลากรโรงเรียน</h1>

    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="(emp, idx) in employees"
        :key="idx"
        :title="emp.name_th + ' / ' + emp.name_en"
        :description="emp.email"
        :image="avatar(emp)"
      />
    </div>
  </div>
</template>

<style scoped></style>