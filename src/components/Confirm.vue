<template>
    <div class="container">
        <div class="text-content py-3">
            <h3 class="text-center"> Chatsworth International School</h3>
         </div>
            <hr class="hr-creen " />
            <div class="text-content py-3">

                <p class="content">
                    Please confirm that your child is a student of Chatsworth International School.
                </p>

                <p class="content">
                    This registration is for new riders only. You do not need to register your child/ children
                    if they are already on our school transport and are existing riders.
                </p>
            </div>
            <div class="d-flex justify-content-center mt-5">

                <router-link to="/register" class="btn btn-danger mx-3">Cancel</router-link>
                <router-link to="/" class="btn btn btn-primary mx-3">Confirm</router-link>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>



.hr-creen{
        border-color: #006d29;
            background-color: #006d29;
}
.content{
    max-width: 650px;
    margin: auto;
    margin-bottom: 10px;
}
</style>