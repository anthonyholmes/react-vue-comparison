<template>
  <div>
    <team-member :name="name" v-for="name in teamMembers" :key="name" />
    <button type="button" @click="shuffleMembers">Shuffle</button>
  </div>
</template>

<script>
import TeamMember from "./TeamMember.jsx";

export default {
  components: {
    TeamMember
  },
  data: () => ({
    teamMembers: ["Jesus", "Zak", "Dan", "Nick", "Anthony"]
  }),
  methods: {
    shuffleMembers: function() {
      this.teamMembers.value.sort(() => Math.random() - 0.5);
    }
  }
};
</script>

