<template>
  <div class="home">
    <div id="names" class="container" v-if="containerState">
      <h1>Who pays the bill</h1>
      <div class="input_container">
        <input type="text" id="UserName" v-model="inputName" />
        <button @click.prevent="addNameToList">ADD</button>
      </div>
      <div class="error_label" v-if="showError">
        You must enter the name !!!
      </div>
      <div class="list_of_names">
        <div
          v-for="(name, index) in NameList"
          :key="index"
          @click="removeName(index)"
        >
          {{ name }}
        </div>
      </div>
      <div v-if="NameList.length > 1">
        <div class="action_button" @click="showResults">Check the looser</div>
      </div>
    </div>
    <div id="result" class="container" v-if="!containerState">
      <div class="result_container">
        <h1>The looser is:</h1>
        <div class="result_value">{{ result }}</div>
        <div class="action_button" @click="resetApp">Start Again</div>
      </div>
    </div>
  </div>
</template>

<script src="@/JS/HomeScript.js">
