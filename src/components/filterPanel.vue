<template>
  <div>
    <v-chip-group column multiple>
      <v-chip filter color="blue lighten-4">Открыто сейчас</v-chip>
      <v-chip filter color="blue lighten-4">Единый читательский билет</v-chip>
      <v-chip filter color="blue lighten-4">Детская</v-chip>
      <v-chip filter color="blue lighten-4">Взрослая</v-chip>
      <v-chip filter color="blue lighten-4">Летняя читальня</v-chip>
    </v-chip-group>
    <div class="d-flex mt-3">
      <v-expansion-panels class="mr-2" hover multiple v-model="amenities">
        <v-expansion-panel>
          <v-expansion-panel-header color="grey lighten-5">Ресурсы для чтения и работы</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-chip-group column multiple>
              <v-chip filter outlined>Читальный зал</v-chip>
              <v-chip filter outlined>Компьютеры</v-chip>
              <v-chip filter outlined>Наушники</v-chip>
              <v-chip filter outlined>Доступ к электронным ресурсам</v-chip>
              <v-chip filter outlined>Подбор литературы по теме</v-chip>
              <v-chip filter outlined>Фактографические справки</v-chip>
            </v-chip-group>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels class="mr-2" hover popout multiple v-model="amenities">
        <v-expansion-panel>
          <v-expansion-panel-header color="grey lighten-5">Для детей</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-chip-group v-model="amenities1" column multiple>
              <v-chip filter outlined>Детская литература</v-chip>
              <v-chip filter outlined>Игровая зона</v-chip>
              <v-chip filter outlined>Занятия и кружки</v-chip>
              <v-chip filter outlined>Настольные игры</v-chip>
            </v-chip-group>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels class="mr-2" hover popout multiple v-model="amenities">
        <v-expansion-panel>
          <v-expansion-panel-header color="grey lighten-5">Копицентр</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-chip-group column multiple>
              <v-chip filter outlined>Сканирование</v-chip>
              <v-chip filter outlined>Ксерокопирование</v-chip>
              <v-chip filter outlined>Печать на принтере</v-chip>
              <v-chip filter outlined>Фото печать</v-chip>
              <v-chip filter outlined>Ламинирование</v-chip>
              <v-chip filter outlined>Брошюровка</v-chip>
              <v-chip filter outlined>Набор текста</v-chip>
            </v-chip-group>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels hover v-model="amenities" multiple>
        <v-expansion-panel>
          <v-expansion-panel-header color="grey lighten-5">Другие услуги</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-chip-group column multiple>
              <v-chip filter outlined>Можно провести мероприятие</v-chip>
              <v-chip filter outlined>Принимаем книги в дар</v-chip>
              <v-chip filter outlined>Подтверждение личности для портала "Гос. услуги"</v-chip>
              <v-chip filter outlined>Издания на иностранных языках</v-chip>
            </v-chip-group>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    amenities: []
  })
};
</script>