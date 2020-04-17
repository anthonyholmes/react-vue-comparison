import { ref } from "@vue/composition-api";
import TeamMember from "./TeamMember.jsx";

export default {
  setup() {
    let teamMembers = ref(["Jesus", "Zak", "Dan", "Nick", "Anthony"]);

    function shuffleMembers() {
      teamMembers.value.sort(() => Math.random() - 0.5);
    }

    return {
      teamMembers,
      shuffleMembers
    };
  },
  render() {
    return (
      <div>
        {this.teamMembers.map(tm => (
          <TeamMember name={tm} key={tm.name} />
        ))}
        <button type="button" onClick={this.shuffleMembers}>
          Shuffle
        </button>
      </div>
    );
  }
};
