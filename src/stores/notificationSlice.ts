import { StateCreator } from "zustand";
import { RecipesSliceType } from "./recipeSlice";
import { FavoritesSliceType } from "./favoritesSlice";

type Notification = {
  text:string;
  error:boolean;
  show: boolean;
}

export type NotificationSliceType = {
  notification: Notification
  showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
  hideNotification: () => void
}


export  const createNotificationSlice : StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set) => ({
  notification: {
    text:'Texto Notificacion',
    error:false,
    show: true
  },
  showNotification: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true,
      }
    })
  },
  hideNotification: () => {
      set({
        notification: {
          text:'',
          error:false,
          show: false,
        },
      })
      }
  }
)