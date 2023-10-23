<script setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import axiosClient from '../../services/axiosClient'
import store from '../../store'
import SuccessMessage from './SuccessMessage.vue'
import FailureMessage from './FailureMessage.vue'

const props = defineProps({
  petId: Number,
  petStatus: String
})

const isOpen = ref(false)
const shipDate = ref(null)
const currentDate = new Date().toISOString().split('T')[0]
const showWarning = ref(false)
function order() {
  if (shipDate.value >= currentDate) {
    axiosClient
      .get(`/pet/${props.petId}`)
      .then(({ data }) => {
        const isAvailable = data.status === 'available' ? true : false
        if (isAvailable) {
          const shipDateValidated = new Date(shipDate.value).toISOString()
          axiosClient
            .post(`/store/order`, {
              id: Math.random(1291409235343465),
              //the unique ID should be generated for every order - in order to simplify putting random number
              petId: props.petId,
              quantity: 1,
              shipDate: shipDateValidated,
              status: 'placed',
              complete: true
            })
            .then((res) => {
              if (res.status === 200) {
                store.dispatch('filters/getAllPets')
                displaySuccessMessage()
              }
            })
            .catch((err) => {
              window.alert(err)
            })
          showWarning.value = false
          closeModal()
        } else {
          closeModal()
          window.alert('sorry this pet is already unaviable')
        }
      })
      .catch((err) => {
        if (err) {
          displayFailureMessage(err.response.status)
        }
      })
  } else {
    showWarning.value = true
  }
}
const closeModal = () => (isOpen.value = false)
const openModal = () => (isOpen.value = true)

const successMessage = ref(false)
const failureMessage = ref(false)
const failureCode = ref(null)

const displaySuccessMessage = () => {
  closeModal()
  successMessage.value = true
  setTimeout(() => (successMessage.value = false), 2000)
}
const displayFailureMessage = (code) => {
  closeModal()
  failureCode.value = code
  failureMessage.value = true
  setTimeout(() => (failureMessage.value = false), 2000)
}
</script>

<template>
  <div>
    <div class="inset-0 flex items-center justify-center">
      <button
        v-if="props.petStatus != 'sold'"
        type="button"
        @click="openModal"
        class="block rounded-md px-2 py-1 text-base text-white md:px-3 md:py-2 md:text-xl xl:ml-auto"
        :class="props.petStatus === 'available' ? 'bg-brown' : 'bg-gray-300 line-through'"
        :disabled="props.petStatus === 'pending'"
      >
        Buy now!
      </button>
    </div>
    <SuccessMessage v-if="successMessage" />
    <FailureMessage v-if="failureMessage" :code="failureCode" />
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all"
              >
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                  Finish your order
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">when should we ship your pet?</p>
                  <input
                    type="date"
                    v-model="shipDate"
                    :min="currentDate"
                    class="my-2 rounded border border-brown p-1"
                  />
                  <span v-if="showWarning" class="block text-red-600">
                    Sorry, You cannot order on this day
                  </span>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border-2 border-brown bg-white px-4 py-2 text-sm font-medium text-brown hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2"
                    @click="order"
                  >
                    Order
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
