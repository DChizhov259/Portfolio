.<template lang="pug">
form.group-block__new-skill
  input.group-block__new-skill-title(
    name='nameSkill' 
    id='nameSkill' 
    type='text' 
    placeholder='Новый навык' 
    required 
    v-model="skill.title")
  .group-block__new-skill-value
    input.group-block__new-skill-value-percent(
      name='skillValue' 
      id='skillValue' 
      type='number' 
      min='0' 
      max='100' 
      placeholder='100' 
      required
      v-model="skill.value")
  button.group-block__new-skill-add-btn(name='skillAddBtn' id='skillAddBtn' type='submit' @click="addSkill")
</template>

<script>
let uniqId = 0;

export default {
  data() {
    return {
      skill: {
        id: 0,
        title: "",
        value: "",
      },
    };
  },
  methods: {
    addSkill() {
      uniqId++;
      this.skill.id = uniqId;
      this.$emit("addSkill", { ...this.skill });
      this.skill.title = "";
      this.skill.value = "";
    },
  },
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.group-block__new-skill {
  display: flex;
  justify-content: flex-end;
  justify-self: center;
  width: 92.4%;
  padding-right: 10px;
  margin-bottom: 25px;
  font-family: "open-sans-regular";
  font-size: 16px;
  line-height: 2.5;
  color: $dark_blue-color;

  @include phones {
    line-height: 2.7;
  }

  &-title {
    width: 45%;
    margin-right: 10px;
    padding-left: 20px;
    resize: none;
    border: none;
    background: none;
    outline: none;
    border-bottom: 1px solid #000;

    @include phones {
      padding-left: 10px;
    }

    &::placeholder {
      opacity: 0.5;
    }
  }

  &-value {
    border-bottom: 1px solid #000;
    width: 75px;
    margin-right: 6.3%;
    &:after {
      content: "%";
    }
    &-percent {
      width: 55%;
      height: 100%;
      margin-left: 10px;
      resize: none;
      border: none;
      background: none;
      outline: none;

      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  &-add-btn {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: $orange-color;

    &::before {
      content: "";
      display: block;
      height: 15px;
      width: 15px;
      background-image: svg-load(
        "plus.svg",
        fill=#ffffff,
        width=100%,
        height=100%
      );
      margin: 0 auto;
    }
  }
}
</style>
