<template>
      <div class="flex justify-center items-center h-screen">
            <form class="bg-white p-6 rounded-lg" @submit.prevent="submitForm">
                <label class="block text-gray-700 font-medium mb-2">请输入您的邀请码</label>
                <input class="border border-gray-400 p-2 rounded-lg w-full" type="text" v-model="iniv_code" maxlength="4" />
                <button class="bg-secondary text-white py-2 px-4 rounded-lg mt-4 hover:bg-secondary-red">Submit</button>
    </form>
  </div>
</template>

<script>

import { GoogleSpreadsheet } from 'google-spreadsheet';

export default {
    data() {
        return {
        iniv_code: ''
        }
    },
    methods: {
        async submitForm() {
            console.log("Code submitted: ", this.iniv_code);
            try {
                // Access the spreadsheet
                console.log(import.meta.env.VITE_CLIENT_EMAIL);
                const doc = new GoogleSpreadsheet('1KaQ0kNN19uKL1MOhBBl9i5mjdb2eIb7t5e8d7L_U1v8');
                await doc.useServiceAccountAuth({
                    client_email: import.meta.env.VITE_CLIENT_EMAIL,
                    private_key: import.meta.env.VITE_PRIVATE_KEY
                });
                await doc.loadInfo();

                // Get the test sheet
                const sheet = doc.sheetsById[53809398];

                console.log(sheet.title);
                

            } catch (error) {
            console.log("Error submitting code:", error);
            }
        }
    }
}
</script>