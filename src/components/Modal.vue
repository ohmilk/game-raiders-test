<script>
export default {

}
</script>

<template>
    
  <div class="modal fade" id="Modal" aria-labelledby="ModalLabel">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title bgc-blue d-shadow" id="ModalLabel">
            <slot name="header"></slot>
        </h5>
        <button type="button" class="btn-close c-blue" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</div>
</template>


<style lang="scss" scoped>
.modal-dialog{
    max-width: 80%;
}
.modal-content{
    background-image: url(../assets/img/backgroundImg/resbck.png);

    .modal-header{

        .modal-title{
            width: 40%;
            border-radius: 20px;
            padding: 10px;
        }
    }
}

</style>