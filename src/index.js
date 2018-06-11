import $ from 'jquery';
$("#file-input").on("change", function () {
    console.log(`file name is ${(this.form)}`)
    let formData = new FormData(this.form);
    formData.append("fileName", this.value);
    console.log(formData);

})