<template>
  <div class="my-todo">

    <div class="title has-text-centered">
      Todo list
    </div>
    <div class="field has-addons mb-5">
      <div class="control">
        <input class="input" type="text" placeholder="Add a todo">
      </div>
      <div class="control">
        <a class="button is-info">
          Add
        </a>
      </div>
    </div>

    <div class="card">
      <div class="card-content">
        <div class="content">

          <div class="columns is-mobile">
            <div class="column">
              Shave my beard
            </div>
            <div class="column is-5 has-text-right">
              <button class="button is-light">
                &check;
              </button>
              <button class="button is-danger ml-2">
                &cross;
              </button>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../node_modules/bulma/css/bulma.min.css';

.my-todo {
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
}
</style>