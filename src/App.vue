<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { loadTheme, watchTheme } from '@/lib/theme';

loadTheme();
watchTheme();
</script>

<template>
  <div class="bg-muted/40 w-screen h-screen flex justify-center items-center">
    <Button>Button text</Button>
  </div>
</template>
