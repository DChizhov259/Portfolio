<template lang="pug">
li.group-block__skill(v-for="skill in skillList")
  .group-block__skill-title {{skill.title}}
  .group-block__skill-value
    .group-block__skill-value-percent {{skill.value}}
  .group-block__skill-action
    button.group-block__skill-action__apply
    button.group-block__skill-action__cancel
    button.group-block__skill-action__edit
    button.group-block__skill-action__trash(
      type="button"
      @click="removeSkill"
    )
</template>
