<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="600">
      <v-card>
        <v-card-title
          class="headline blue white--text"
          primary-title
        >Предварительная запись на мероприятие</v-card-title>

        <div class="d-flex justify-space-between" style="color: #5f6c7a">
          <v-card-title class="mb-0 subtitle-1" v-if="eventdata.eventTime">
            <v-icon class="pr-1">mdi-clock-outline</v-icon>
            {{eventdata.eventTime}}
          </v-card-title>

          <v-card-title class="subtitle-1">
            <v-icon class="pr-1">mdi-calendar-month</v-icon>
            {{eventdata.eventDate}}
          </v-card-title>
        </div>
        <div
          class="headline mt-1 mb-3 pb-0 font-weight-regular"
          style="color: #5f6c7a"
        >{{eventdata.titlePart2}}</div>



      
        <v-card-text class="text-left"><i>
        {{eventdata.titlePart1}} "{{eventdata.titlePart2}}" пройдёт {{eventdata.eventDate}} по адресу {{eventdata.address}} (<b>{{eventdata.name}}</b>)   
          <i v-if="eventdata.eventTime">, время проведения: {{eventdata.eventTime}} ч.</i></i>
        </v-card-text>
        <v-card-text
          class="text-left"
        >  
        Предварительная запись означает что вы даёте своё согласие на регистрацию как гостя мероприятия. Если будеит возможно для вас будет зарезирвированно место на мероприятии. Ваша заявка будет отображено в статестических отчётах.</v-card-text>

        <v-card-text
          class="text-left"
        >Мы заранее предупридим Вас по электронной почте о начале пероприятия, о переносе либо отмене мероприятия.</v-card-text>

        <v-checkbox
          class="ml-5 font-weight-bold"
          label="Я даю своё согласие обработку моих персональных данных"
        ></v-checkbox>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false">Я пойду</v-btn>
          <v-btn color="secondary" text @click="dialog = false">Отменить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      eventdata: {
        titlePart2: ""
      }
    };
  }
};
</script>
