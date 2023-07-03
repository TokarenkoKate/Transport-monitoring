import { useRef, useEffect, useState } from 'react';
import MapView from 'react-native-map-clustering';
import {
  StyleSheet,
  View,
  ScrollView,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useIntl } from 'react-intl';
import { CoordinatesProps } from 'types/map';
import { Vehicle } from 'types/vehicles';
import VehicleCardForGeneralMap from '../vehicle-card-for-general-map/vehicle-card-for-general-map';
import Text from 'components/ui-components/text/text';

interface VehiclesMapModalProps {
  mapRef: React.MutableRefObject<MapView | null>;
  cardWidth: number;
  vehicles: Vehicle[];
  selectedVehicleNumber: number;
  onScrollCardsSetSelectedVehicle: (coordinates: CoordinatesProps, vehicleNumber: number) => void;
}

const SCROLLVIEW_GAP = 15;

function VehiclesMapModal({
  mapRef,
  cardWidth,
  vehicles,
  selectedVehicleNumber,
  onScrollCardsSetSelectedVehicle,
}: VehiclesMapModalProps) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage: f } = useIntl();
  const vehiclesScrollViewRef = useRef<ScrollView | null>(null);
  const [currentCardNumber, setCurrentCardNumber] = useState<number>(0);

  // function passed to ScrollView, on scroll end, change current card number;
  const onScrollSetCardNumber = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const position = event.nativeEvent.contentOffset;
    const cardNumber = Math.round(position.x / cardWidth);
    if (cardNumber !== currentCardNumber) {
      setCurrentCardNumber(cardNumber);
    }
  };

  // if card number in the scroll view is changed, then animated map to the specific point;
  useEffect(() => {
    if (mapRef.current) {
      const { current_location } = vehicles[currentCardNumber];
      mapRef.current.animateToRegion({
        ...current_location,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });

      onScrollCardsSetSelectedVehicle(current_location, currentCardNumber);
    }
  }, [currentCardNumber]);

  // Function scroll ScrollView to the certain vehicle card,
  // after click at the vehicle point in the map;
  const scrollToPoint = () => {
    if (vehiclesScrollViewRef.current) {
      const x = selectedVehicleNumber * cardWidth + selectedVehicleNumber * SCROLLVIEW_GAP;
      vehiclesScrollViewRef.current.scrollTo({
        x: x,
        y: 0,
        animated: true,
      });
    }
  };

  useEffect(() => {
    scrollToPoint();
  }, [selectedVehicleNumber]);

  return (
    <View style={styles.bottomModal}>
      {/*--- Titles ---*/}
      <View style={styles.titlesWrapper}>
        <Text size="extraLarge" fontWeight="bold">
          {f({ id: 'mapgen_select_transport' })}
        </Text>
        <Text size="medium" fontWeight="semiBold" color="gray">
          {f({ id: 'mapgen_found' }, { n: vehicles.length })}
        </Text>
      </View>

      {/*--- List with Vehicle Cards ---*/}
      <ScrollView
        ref={vehiclesScrollViewRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        contentContainerStyle={{ paddingHorizontal: 20, gap: SCROLLVIEW_GAP }}
        disableIntervalMomentum
        bounces={false}
        onMomentumScrollEnd={onScrollSetCardNumber}
        onLayout={(_event: LayoutChangeEvent) => scrollToPoint()}
      >
        {vehicles.map((vehicle) => (
          <VehicleCardForGeneralMap vehicle={vehicle} key={vehicle.title} cardWidth={cardWidth} />
        ))}
      </ScrollView>
    </View>
  );
}

export default VehiclesMapModal;

const styles = StyleSheet.create({
  bottomModal: {
    position: 'absolute',
    bottom: 0,
    minHeight: 214,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 16,
  },
  titlesWrapper: {
    marginBottom: 16,
    paddingHorizontal: 27,
  },
});
