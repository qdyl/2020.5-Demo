<template>
  <section class="index-wrap">
    <search-check></search-check>
    <job-list></job-list>
  </section>
</template>

<script>
import SearchCheck from "../components/SearchCheck";
import JobList from "../components/JobList";
export default {
    
  components: {
    SearchCheck: SearchCheck,
    JobList: JobList
  }
};
</script>

<style>
</style>