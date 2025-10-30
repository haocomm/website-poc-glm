<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Navigation Header -->
    <div class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <h1 class="text-xl font-bold text-gray-900 dark:text-white">
              Chat App
            </h1>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              Welcome, {{ user?.username }}
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-medium">
                  {{ user?.username?.[0]?.toUpperCase() }}
                </span>
              </div>
              <span class="text-sm font-medium text-gray-900 dark:text-white">
                {{ user?.username }}
              </span>
            </div>
            <UButton
              @click="handleLogout"
              variant="soft"
              color="gray"
              size="sm"
            >
              <Icon name="i-heroicons-arrow-right-on-rectangle" class="w-4 h-4" />
              Logout
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 h-screen">
        <!-- Sidebar with rooms -->
        <div class="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Chat Rooms
            </h3>
            <UButton
              size="sm"
              color="primary"
              variant="soft"
              @click="showCreateRoom = true"
            >
              <Icon name="i-heroicons-plus" />
            </UButton>
          </div>

          <div class="space-y-2">
            <div
              v-for="room in rooms"
              :key="room._id"
              @click="joinRoom(room._id)"
              :class="[
                'p-3 rounded-lg cursor-pointer transition-colors',
                currentRoom === room._id
                  ? 'bg-primary-100 dark:bg-primary-900'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              ]"
            >
              <div class="font-medium text-gray-900 dark:text-white">
                {{ room.name }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ room.members?.length || 0 }} members
              </div>
            </div>
          </div>
        </div>

        <!-- Main chat area -->
        <div class="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col">
          <div v-if="!currentRoom" class="flex-1 flex items-center justify-center">
            <div class="text-center">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Welcome to Chat App
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                Select a room from the sidebar to start chatting
              </p>
            </div>
          </div>

          <div v-else class="flex-1 flex flex-col">
            <!-- Chat header -->
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ currentRoomName }}
              </h3>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ onlineUsers.length }} users online
              </div>
            </div>

            <!-- Messages area -->
            <div class="flex-1 p-4 overflow-y-auto chat-messages">
              <div
                v-for="message in messages"
                :key="message.id"
                class="mb-4"
              >
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <span class="text-white text-sm font-medium">
                        {{ message.username?.[0]?.toUpperCase() }}
                      </span>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center space-x-2">
                      <span class="font-medium text-gray-900 dark:text-white">
                        {{ message.username }}
                      </span>
                      <span class="text-xs text-gray-500 dark:text-gray-400">
                        {{ formatTime(message.timestamp) }}
                      </span>
                    </div>
                    <div class="text-gray-700 dark:text-gray-300">
                      {{ message.content }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Message input -->
            <div class="p-4 border-t border-gray-200 dark:border-gray-700">
              <div class="flex space-x-4">
                <UInput
                  v-model="messageInput"
                  placeholder="Type your message..."
                  @keyup.enter="sendMessage"
                  class="flex-1"
                />
                <UButton
                  @click="sendMessage"
                  color="primary"
                  variant="solid"
                >
                  Send
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Room Modal -->
    <UModal v-model="showCreateRoom">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Create New Room</h3>
        </template>

        <UForm
          :state="roomForm"
          @submit="createRoom"
          class="space-y-4"
        >
          <UFormGroup label="Room Name" name="name">
            <UInput
              v-model="roomForm.name"
              placeholder="Enter room name"
              required
            />
          </UFormGroup>

          <UFormGroup label="Description" name="description">
            <UTextarea
              v-model="roomForm.description"
              placeholder="Enter room description (optional)"
            />
          </UFormGroup>

          <div class="flex justify-end space-x-3">
            <UButton
              @click="showCreateRoom = false"
              variant="soft"
            >
              Cancel
            </UButton>
            <UButton
              type="submit"
              color="primary"
              :loading="creatingRoom"
            >
              Create Room
            </UButton>
          </div>
        </UForm>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
// Protect this route - requires authentication
definePageMeta({
  middleware: 'auth'
})

const router = useRouter()
const { user, token, logout } = useAuth()

// State
const rooms = ref([])
const currentRoom = ref(null)
const currentRoomName = ref('')
const messages = ref([])
const messageInput = ref('')
const onlineUsers = ref([])
const showCreateRoom = ref(false)
const creatingRoom = ref(false)

// Form for creating room
const roomForm = reactive({
  name: '',
  description: ''
})

// Socket connection
let socket = null

// Import Socket.IO client
import { io } from 'socket.io-client'

// Import API configuration
import { API_BASE_URL, SOCKET_URL } from '~/config/api'

// Check authentication
onMounted(async () => {
  await loadRooms()
  initializeSocket()
})

async function loadRooms() {
  try {
    const response = await $fetch('/api/chat/rooms', {
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      baseURL: API_BASE_URL
    })
    rooms.value = response.rooms || []
  } catch (error) {
    console.error('Failed to load rooms:', error)
    rooms.value = []
  }
}

function initializeSocket() {
  socket = io(SOCKET_URL, {
    auth: {
      token: token.value
    }
  })

  socket.on('connect', () => {
    console.log('Connected to socket server')
  })

  socket.on('new-message', (message) => {
    messages.value.push(message)
  })

  socket.on('user-joined', (data) => {
    console.log('User joined:', data)
  })

  socket.on('user-left', (data) => {
    console.log('User left:', data)
  })
}

async function joinRoom(roomId) {
  currentRoom.value = roomId
  const room = rooms.value.find(r => r._id === roomId)
  currentRoomName.value = room.name

  if (socket) {
    socket.emit('join-room', roomId)
  }

  await loadMessages(roomId)
}

async function loadMessages(roomId) {
  try {
    messages.value = await $fetch(`/api/chat/rooms/${roomId}/messages`, {
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      baseURL: API_BASE_URL
    })
  } catch (error) {
    console.error('Failed to load messages:', error)
  }
}

function sendMessage() {
  if (!messageInput.value.trim() || !socket) return

  socket.emit('send-message', {
    roomId: currentRoom.value,
    content: messageInput.value.trim(),
    type: 'text'
  })

  messageInput.value = ''
}

async function createRoom() {
  creatingRoom.value = true

  try {
    const newRoom = await $fetch('/api/chat/rooms', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      body: roomForm,
      baseURL: API_BASE_URL
    })

    // Ensure rooms.value is an array before pushing
    if (!Array.isArray(rooms.value)) {
      rooms.value = []
    }

    rooms.value.push(newRoom.room)
    showCreateRoom.value = false

    // Reset form
    roomForm.name = ''
    roomForm.description = ''
  } catch (error) {
    console.error('Failed to create room:', error)
  } finally {
    creatingRoom.value = false
  }
}

async function handleLogout() {
  await logout()
  await router.push('/auth/login')
}

function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString()
}

// Cleanup on unmount
onUnmounted(() => {
  if (socket) {
    socket.disconnect()
  }
})

// SEO Meta
useHead({
  title: 'Chat - Chat App',
  meta: [
    { name: 'description', content: 'Join real-time conversations' }
  ]
})
</script>