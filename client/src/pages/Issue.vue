<script setup lang="ts">
import { ref } from 'vue'
const clientInfo = ref('');
const email = ref('');
function reset(){
    clientInfo.value = '';
    email.value = ''
}
</script>

<template>
    <div class="container columns is-centered">
        <form class="box">
        <div class="column is-two-thirds">
            <h1 class="title">Report a bug</h1>
            <p>We apologise for the inconvenience. Please describe the issue you are facing and we will get back to you with a fix.</p>
		<fieldset>
			<label for='issue-description'>Describe your issue below</label>
			<textarea id='issue-description' name='issue-description'></textarea>
		</fieldset>
        <fieldset>
			<label for='email'>Your email address</label>
			<p class='helper'>Please provide your email address if you are happy for us to contact you when the bug has been fixed or in case we need additional information.</p>
			<input type="email" id='email' name='email'>
		</fieldset>
        <input type="hidden" id="client-info" name="client-info" value=''>
		<noscript>
			<input type="hidden" id="javascript-disabled" name="javascript-disabled" value="true">
		</noscript>
        
		    <button type="submit" @click="reset">Submit Report</button>
       
        </div>
        </form>
    </div>
</template>

<style scoped>
</style>