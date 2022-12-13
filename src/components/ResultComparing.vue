<template>
   <div class="form">
      <div class="block-form">
         <h1>Results</h1>
         <h2>non-matching strings</h2>
      </div>
      <div class="result__block">
         <div class="content-result"
            v-if="JSON.stringify(this.$store.state.file) !== JSON.stringify(this.$store.state.fileSecond)">
            <div class="block__result-item" v-for="(elem, indexFirst) in dataFailUse2" :key="elem.id">
               <span> Файл <b>"{{ fileNameSecondUse }}"</b>, который содержит </span>
               <span v-for="(elemSecond, index) in elem" :key="elemSecond.id">
                  <span>
                     <b>{{ index }}: {{ elemSecond }}</b>
                  </span>,
               </span>
               <span> несоответстует файлу <b>"{{ fileNameUse }}"</b>, который содержит: </span>
               <span v-for="(elemThird, indexSecond) in dataFailUse" :key="elemThird.id">
                  <div v-if="(indexFirst == indexSecond)">
                     <span v-for="(elemFourth, indexThird) in elemThird" :key="elemFourth.id">
                        <span>
                           {{ indexThird }}: <b>{{ elemFourth }}</b>
                        </span>
                     </span>
                  </div>
               </span>
            </div>
         </div>
         <div v-else><b>Все данные совпали</b></div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         dataFailUse2: this.$store.state.dataFail2,
         dataFailUse: this.$store.state.dataFail,
         fileNameUse: this.$store.state.fileName,
         fileNameSecondUse: this.$store.state.fileNameSecond,
      }
   },
   mounted() {
      this.getData()
   },

   methods: {
      
   }
}
</script>

<style>
.block-form {
   text-align: center;
}

.result__block {
   border: 2px solid #419152;
   max-width: 400px;
   max-height: 200px;
   margin: 0 auto;
   border-radius: 15px;
   overflow: auto;
   padding: 10px;
}

.block__result-item {
   border-bottom: 2px solid #419152;
   border-top: 2px solid #419152;
   margin: -2px 0;
   padding: 10px 0;
}
</style>