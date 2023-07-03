import { LOCALES } from 'constants/intl-const';
import { VehicleCategory } from 'constants/vehicle-const';

export const messages = {
  [LOCALES.ENGLISH]: {
    // vehicle-list-screen
    list_title: 'Transport monitoring',
    list_see_in_map: 'See in the map',
    list_select_category: 'Select the transport category',
    ['list_' + VehicleCategory.Truck]: 'Truck',
    ['list_' + VehicleCategory.Passenger]: 'Passenger',
    ['list_' + VehicleCategory.Construction]: 'Construction',
    list_found: 'Found',
    list_vehicles_qty: '{n, plural, one {# vehicle} other {# vehicles}}',
    list_select_some: 'You can select some categories',
    list_confirm: 'Confirm',
    list_reset: 'Reset',
    // map-general-screen
    mapgen_select_transport: 'Select transport',
    mapgen_found: 'Found {n}',
    mapgen_all: 'all',
    ['mapgen_' + VehicleCategory.Truck]: 'truck',
    ['mapgen_' + VehicleCategory.Passenger]: 'passenger',
    ['mapgen_' + VehicleCategory.Construction]: 'construction',
    mapgen_see_details: 'see details',
    // vehicle-description-screen
    vehicle_driver_name: 'Driver full name',
    vehicle_driver_number: 'Driver contact number',
    vehicle_send_message: 'Send a message',
    vehicle_call_driver: 'Call a driver',
    vehicle_invalid_number: 'Invalid phone number',
    vehicle_install_whatsapp: 'Please install Whatsapp on your device',
    vehicle_whatsapp_message:
      'Good afternoon, could you please tell me what order number you are currently working on?',
    ['vehicle_' + VehicleCategory.Truck]: 'truck',
    ['vehicle_' + VehicleCategory.Passenger]: 'passenger',
    ['vehicle_' + VehicleCategory.Construction]: 'construction',
    // setting-screen
    settings_select_language: 'Select the application language',
  },
  [LOCALES.RUSSIAN]: {
    // vehicle-list-screen
    list_title: 'Отслеживание транспорта',
    list_see_in_map: 'Смотреть на карте',
    list_select_category: 'Выберите категорию транспорта',
    ['list_' + VehicleCategory.Truck]: 'Грузовой',
    ['list_' + VehicleCategory.Passenger]: 'Пассажирский',
    ['list_' + VehicleCategory.Construction]: 'Спецтранспорт',
    list_found: 'Найдено',
    list_vehicles_qty:
      '{n, plural, one {# транспортное средство} few {# транспортных средства} other {# транспортных средств}}',
    list_select_some: 'Вы можете выбрать несколько категорий',
    list_confirm: 'Подтвердить',
    list_reset: 'Сбросить',
    // map-general-screen
    mapgen_select_transport: 'Выберите транспортное средство',
    mapgen_found: 'Найдено {n}',
    mapgen_all: 'все',
    ['mapgen_' + VehicleCategory.Truck]: 'грузовой',
    ['mapgen_' + VehicleCategory.Passenger]: 'пассажирский',
    ['mapgen_' + VehicleCategory.Construction]: 'спецтранспорт',
    mapgen_see_details: 'подробности',
    // vehicle-description-screen
    vehicle_driver_name: 'Полное имя водителя',
    vehicle_driver_number: 'Контактный телефон водителя',
    vehicle_send_message: 'Отправить сообщение',
    vehicle_call_driver: 'Позвонить водителю',
    vehicle_invalid_number: 'Некорректный номер телефона',
    vehicle_install_whatsapp: 'Пожалуйста, установите WhatsApp на свое устройство',
    vehicle_whatsapp_message:
      'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе?',
    ['vehicle_' + VehicleCategory.Truck]: 'грузовой',
    ['vehicle_' + VehicleCategory.Passenger]: 'пассажирский',
    ['vehicle_' + VehicleCategory.Construction]: 'спецтранспорт',
    // setting-screen
    settings_select_language: 'Выберите язык приложения',
  },
};
