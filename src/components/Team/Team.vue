<template>
  <div>
    <team-member :name="name" v-for="name in teamMembers" :key="name" />
    <button type="button" @click="shuffleMembers">Shuffle</button>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import TeamMember from "./TeamMember.jsx";

export default {
  components: {
    TeamMember
  },
  setup() {
    let teamMembers = ref(["Jesus", "Zak", "Dan", "Nick", "Anthony"]);

    function shuffleMembers() {
      teamMembers.value.sort(() => Math.random() - 0.5);
    }

    return {
      teamMembers,
      shuffleMembers
    };
  }
};
</script>

