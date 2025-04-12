<template>

    <v-card class="mx-15" prepend-icon="mdi-clipboard-account" subtitle="Identificación">
        <template v-slot:title>
            <span class="font-weight-black">Alta de contribuyente</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
            <v-form >
                <v-row>
                    <v-col sm="4">
                        <v-text-field label="Nombre" model-value="" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col sm="4">
                        <v-text-field label="Primer apellido" model-value="" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col sm="4">
                        <v-text-field label="Segundo apellido" model-value="" variant="outlined"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col sm="6">
                        <v-text-field label="CURP" model-value="" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col sm="6">
                        <v-text-field label="RFC (con homoclave)" model-value="" variant="outlined"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col sm="4">
                        <v-text-field label="Código Postal" model-value="" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col sm="8">
                        <v-text-field label="Calle" model-value="" variant="outlined"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col sm="4">
                        <v-text-field label="Numero exterior" model-value="" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col sm="4">
                        <v-text-field label="Numero interior" model-value="" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col sm="4">
                        <v-text-field label="Estado" model-value="" variant="outlined"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col sm="6">
                        <v-text-field label="Delegación/Municipio" model-value="" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col sm="6">
                        <v-text-field label="Colonia" model-value="" variant="outlined"></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mx-auto items-center justify-center w-full mb-2">
                    <!-- <v-col sm="6"> -->
                    <v-btn type="submit">guardar</v-btn>
                    <!-- </v-col> -->
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>

</template>
<style scoped>

</style>