export interface CoordinatesProps {
  latitude: number;
  longitude: number;
}

export interface RouteProps {
  departure_point: CoordinatesProps;
  destination_point: CoordinatesProps;
}
