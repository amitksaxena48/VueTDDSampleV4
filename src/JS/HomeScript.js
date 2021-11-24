export default {
  name: "Home",
  data() {
    return {
      containerState: true,
      inputName: "",
      NameList: [],
      result: "",
      pagetitle: "",
      showError: false
    };
  },
  methods: {
    addNameToList() {
      //      console.log(this.inputName);
      if (this.validateName(this.inputName)) {
        this.NameList.push(this.inputName);
        this.inputName = "";
        this.showError = false;
      } else {
        this.showError = true;
      }
    },
    validateName(NameVal) {
      if (NameVal !== "") {
        return true;
      } else {
        return false;
      }
    },
    showResults() {
      //console.log(this.pagetitle);
      let rand = this.NameList[
        Math.floor(Math.random() * this.NameList.length)
      ];
      this.result = rand;
      this.containerState = false;
    },
    resetApp() {
      this.containerState = true;
      this.NameList = [];
      this.result = "";
    },
    removeName(index) {
      this.NameList.splice(index, 1);
    }
  }
};
