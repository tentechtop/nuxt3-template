<template>
  <div>
    <div  class="select-options-container">
      <div class="select-options-box">
        <div class="selectTitle">{{ placeholderSubTitle }}</div>
        <div class="select-options-list-box">
          <select-options-item
              v-for="(item, index) in options"
              :key="index"
              :item="item"
              :item-index="index.toString()"
              @toggle-checked="handleSelect"
              :is-radio="isRadio"
          ></select-options-item>
        </div>
        <div class="select-button-container">
          <button class="select-button cancel-button" @click="handleCancel">{{ $t('cancel') }}</button>
          <button class="select-button apply-button" @click="gotoHandleSelect">{{ $t('apply') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectOptionsItem from "~/components/t/select-options-Item.vue";

const emits = defineEmits(['SelectCondition']);//触发事件

const selecting = ref(false)
const isCurrentSelecting = ref({})

function handleSelect(event){
  isCurrentSelecting.value = event
  if (props.isRadio){
    iterateList(props.options)
  }
  gotoHandleSelect()
}
function iterateList(list) {
  list.forEach(item=>{
    if (item.value !== isCurrentSelecting.value.value){
      item.checked = false
    }
    if(item.children){
      iterateList(item.children)
    }
  })
}




function gotoHandleSelect(){
  /*  isSelectingValue.value = props.options
        .filter(item => item.checked) // 过滤出选中的项
        .map(item => item.value) // 提取每个选中项的值
        .join(','); // 将值用逗号连接成一个字符串*/
  let selectId =getSelectedValues(props.options)
  emits('SelectCondition',selectId);
}

function getSelectedValues(options) {
  // Helper function to recursively process options
  function processOptions(options) {
    return options.reduce((acc, item) => {
      if (item.checked) {
        acc.push(item.value);
      }
      if (item.children && Array.isArray(item.children)) {
        acc = acc.concat(processOptions(item.children));
      }
      return acc;
    }, []);
  }
  return processOptions(options).join(',');
}




function handleCancel(){
  isCurrentSelecting.value = {}
  if (props.isRadio){
    iterateList(props.options)
  }
  emits('SelectCondition',"");
  selecting.value=false
}

const props = defineProps({
  size:{
    type:String,
    default:'small'
  },
  placeholderTitle:{
    type:String,
    default:'Filter'
  },
  placeholderSubTitle:{
    type:String,
    default:'Category'
  },
  options:{
    type:Array,
    default:()=>[]
  },
  isRadio:{
    type:Boolean,
    default:false //默认多选
  }
})
</script>

<style scoped>
.select-options-container{
  position: relative;
  top: 100%;
  right: 0;
  min-width: 240px;
  padding: 10px;
  background-color: #FAFAFC;
  border-radius: 20px;
}

.select-options-box{
  width: 100%;
  height: 100%;
  background-color: #FFF;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.03);
}
.selectTitle{
  width: 100%;
  padding: 10px 0 5px;
  color: var(--color-text-4);
}
.select-options-list-box{
  padding: 20px 0;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
}

.select-options-item{
  user-select: none;
  cursor: pointer;
  padding: 8px 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: #000000;
  font-size: 15px;
}
.select-options-item-input{
  cursor: pointer;
  margin-right: 16px;
}
.select-options-item-label{
  cursor: pointer;
}

.select-button-container{
  box-shadow: 0px -10px 20px rgba(255,255,255,0.85);
  padding: 25px 0 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.select-button{
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 45%;
}

@media screen and (max-width: 768px){
  .select-button-box{
    padding: 9px 20px;
  }
  .select-options-container{
    position: absolute;
    top: 100%;
    right: -100%;
    width: 240px;
    padding: 10px;
  }
}

</style>
