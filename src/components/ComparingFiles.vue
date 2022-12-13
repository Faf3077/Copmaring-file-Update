<template>
   <div class="form">
      <h2 class="name-form-comparing">Comparing</h2>
      <div class="form-comparing">
         <div class="column-first">
            <h3> Table 1: "{{ this.$store.state.fileName }}"</h3>
            <div v-for="(countSelect, index) in dataMain" :key="countSelect">
               <select v-model="firstSelected[index]" @change="getSelectValue()" v-if="firstSelected[index] !== 'index'">
                  <option selected="selected" disabled>
                     <span>Выберите столбец</span>
                  </option>
                  <option v-for="nameTable in dataMain" :key="nameTable"> {{ nameTable }} </option>
               </select>
            </div>
         </div>
         <div class="column-second">
            <h3>Table 2: "{{ this.$store.state.fileNameSecond }}"</h3>
            <div v-for="(countSelectSecond, index) in dataMainSecond" :key="countSelectSecond">
               <select v-model="secondSelected[index]" @change="getSelectValueSecond()"
                  v-if="secondSelected[index] !== 'index'">
                  <option selected="selected" disabled>
                     <span>Выберите столбец</span>
                  </option>
                  <option v-for="nameTable1 in dataMainSecond" :key="nameTable1"> {{ nameTable1 }} </option>
               </select>
            </div>
         </div>
      </div>
      <div class="block__btn">
         <router-link to="/"><button class="btn btn1">Back</button></router-link>
         <router-link to="/ResultComparing"><button @click='result()' class="btn btn1">Next</button></router-link>
      </div>
   </div>
</template>
 
<script>
export default {
   data() {
      return {
         dataMain: [],//заголовки первого файла
         dataMainSecond: [],//заголовки второго файла
         file: this.$store.state.file,//данные первого файла 
         fileSecond: this.$store.state.fileSecond,//данные второго файла
         firstSelected: [], //выбранные параметры из первой таблицы
         secondSelected: [], //выбранные параметры из второй таблицы
      }
   },
   mounted() {
      this.dataFillingOne();
      this.dataFillingTwo();
      this.getSelectValue();
      this.getSelectValueSecond();
   },
   methods: {
      dataFillingOne() {
         for (const data in this.$store.state.file[0]) {
            this.dataMain.push(data)
            this.firstSelected.push(data)
         }
      },
      dataFillingTwo() {
         for (const dataSecond in this.$store.state.fileSecond[0]) {
            this.dataMainSecond.push(dataSecond)
            this.secondSelected.push(dataSecond)
         }
      },
      result() {
         let arr = this.$store.state.file.map(JSON.stringify);
         let arr2 = this.$store.state.fileSecond.map(JSON.stringify)
            .filter((e) => !arr.includes(e))
            .map(JSON.parse);
         this.$store.state.dataFail2 = arr2
         console.log(this.$store.state.dataFail2);
         let arr3 = this.$store.state.fileSecond.map(JSON.stringify);
         let arr4 = this.$store.state.file.map(JSON.stringify)
            .filter((e) => !arr3.includes(e))
            .map(JSON.parse);
         this.$store.state.dataFail = arr4
         console.log(this.$store.state.dataFail);
      },

      getSelectValue() {
         this.$store.commit('SET_FIRST_SELECTED', this.selected_1)
      },
      getSelectValueSecond() {
         this.$store.commit('SET_SECOND_SELECTED', this.selected_2)
      }

   }
}
</script>
 
 
<style>
.block__btn {
   display: flex;
   justify-content: space-around;
}

h3 {
   margin-bottom: 20px;
   max-width: 200px;
}

.name-form-comparing {
   text-align: center;
}

.form-comparing {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 50px;
}

select {
   width: 200px;
   margin-bottom: 10px;
   border: 2px solid #419152;
   border-radius: 15px;
   padding: 3px 5px;
}
</style>