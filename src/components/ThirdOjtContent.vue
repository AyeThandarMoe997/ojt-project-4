<template>
  <div class="third-content">
    <div>
        <div class="form-group row">
          <label for="Name" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="staticEmail" v-model="form.name" required>
            <span class="error-text">{{ this.nameError }}</span>
          </div>
        </div>
        <div class="form-group row">
          <label for="Email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-8">
            <input type="email" class="form-control" id="email" v-model="form.email" required>
            <span class="error-text">{{ this.emailError }}</span>
          </div>
        </div>
        <div class="form-group row">
          <label for="url" class="col-sm-2 col-form-label">Url</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="url" v-model="form.url">
            <span class="error-text">{{ this.urlError }}</span>
          </div>
        </div>
        <div class="form-group row">
          <label for="phone_no" class="col-sm-2 col-form-label">Phone No</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="phone_no" v-model="form.phone_no" required>
            <span class="error-text">{{ this.phone_noError }}</span>
          </div>
        </div>
        <div class="form-group row">
          <div class="form-group col-sm-6">
            <button type="cancel" @click="setCancel()" class="btn btn-primary col-sm-2">Cancel</button>
          </div>
          <div class="form-group col-sm-6">
            <button @click="setConfirm()" class="btn btn-primary col-sm-2">Confirm</button>
          </div>
        </div>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        url: '',
        phone_no: ''
      },
      is_alpha: true,
      is_email:true,
      nameError: '',
      emailError: '',
      urlError: '',
      phone_noError: '',
      emailType: '@email.com',
      is_no: true
    }
  },
  methods: {
    setCancel() {
      this.form.name = '',
      this.is
      this.form.email = '',
      this.form.url = '',
      this.form.phone_no = ''
    },
    setConfirm() {
      if(this.form.name == '')
      {
        this.nameError = '* Name field is required!';
      } else {
          this.isLetter();
        if(this.is_alpha == false) {
          this.nameError= '* Name is only accept alphabet *';
        } 
      }
      
      if(this.form.email == '')
      {
        this.emailError = '* Email field is required!';
      }else {
        if(this.form.email.indexOf(this.emailType) == -1)
        {
          this.is_email = false;
          if(this.is_email == false) {
          this.emailError= '* Email is only accept email type eg:@email.com *';
          }
        }
      }
      if(this.form.url == '')
      {
        this.urlError = '* Url field is required!';
      }
      if(this.form.phone_no == '')
      {
        this.phone_noError = '* Phone No field is required!';
      } else {
        this.isNumber();
        if(this.is_no == false) {
        this.phone_noError= '* Phone No is only accept number *';
      }
      }
    },
    isLetter() {
      if(/^[A-Za-z]+$/.test(this.form.name))
      return this.is_alpha;
      else this.is_alpha = false;
    },
    isNumber() {
      if(/^[0-9]+$/.test(this.form.phone_no))
      return this.is_no;
      else this.is_no = false;
    }
  }
}
</script>

<style>
.third-content {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    text-align: center;
    background-color: #C0C0C0;
    color: #fff;
    margin: 0px 50px;
    text-align: center;
    padding: 150px 0px;
}
.movie-list {
  width: 300px;
  text-align: left;
  padding-left: 550px;
}
.error-text {
  font-size: 12px;
  color: red;
  text-align: left;
}
 
</style>