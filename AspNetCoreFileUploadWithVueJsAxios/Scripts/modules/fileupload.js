import Vue from "vue";
import axios from "axios"

var fileUploadApp = new Vue({
    el: "#fileUploadApp",
    data() {
        return {
            files: new FormData()
        }
    },
    methods: {
        startUpload() {
            axios.post(`/Home/UploadFiles`,
                this.files,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    alert(`Total Mock File Uploaded: ${response.data}`);
                }).catch(error => {
                    alert(`something went wrong: ${error}`);
                });
        },
        fileChange(fileList) {
            for (let i = 0; i < fileList.length; i++) {
                this.files.append("file", fileList[i], fileList[i].name);
            }
        }
    }
});

export default fileUploadApp;