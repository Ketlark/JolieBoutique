<template>
  <q-page class="flex">
    <div class="container margin-top" style="margin-bottom: 120px;">

      <div class="row justify-content-center mt-5">
        <div class="col-10">
            <div class="form-group">
              <label for="address">Adresse de livraison</label>
              <input type="text" class="form-control" id="address" name="address">
            </div>
            <div class="form-group">
              <label for="postalcode">Code postal</label>
              <input type="text" class="form-control" id="postalcode" name="postalcode">
            </div>
            <div class="form-group">
              <label for="city">Ville</label>
              <input type="text" class="form-control" id="city" name="city">
            </div>

            <div class="form-group mt-5 text-center">
              <button class="btn btn-edit-profile col-12 mb-3">Payer avec Paypal</button>
            </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'Payment',
  }
</script>
