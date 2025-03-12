import axios from 'axios';
import { API_BASE_URL } from 'src/config/config';

export interface CreateEventPayload {
  title: string;
  category: string;
  type: string;
  startDate: string;
  startTime: string;
  endTime: string;
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
  description: string;
  bannerImage: File;
  isTicketed: boolean;
  tickets?: any;
  organizerId: string;
}

export const createEvent = async (eventData: CreateEventPayload): Promise<void> => {
  try {
    const formData = new FormData();

    formData.append('title', eventData.title);
    formData.append('category', eventData.category);
    formData.append('type', eventData.type);
    formData.append('startDate', eventData.startDate);
    formData.append('startTime', eventData.startTime);
    formData.append('endTime', eventData.endTime);

    formData.append('location[address]', eventData?.location?.address);
    formData.append('location[latitude]', String(eventData.location.latitude));
    formData.append('location[longitude]', String(eventData.location.longitude));

    formData.append('description', eventData.description);
    formData.append('banner_Image', eventData.bannerImage);
    formData.append('isTicketed', String(eventData.isTicketed));

    if (eventData.isTicketed && eventData.tickets) {
      formData.append('tickets', JSON.stringify(eventData.tickets));
    }

    formData.append('organizerId', eventData.organizerId);

    const response = await axios.post(`${API_BASE_URL}/api/v1/events/create-event`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Event created successfully:', response.data);
  } catch (error) {
    console.error('Error creating event:', error);
  }
};
