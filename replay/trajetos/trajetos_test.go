package trajetos

import (
	"reflect"
	"testing"
)

func TestDeltaXY(t *testing.T) {
	tests := []struct {
		name   string
		gx, gy []float64
		want   []int
	}{
		{"empty", nil, nil, []int{}},
		{"first point is absolute", []float64{100}, []float64{90.5}, []int{400, 362}},
		{"then differences of quantized values", []float64{100, 100.3, 100.1}, []float64{90, 90, 89.74}, []int{400, 360, 1, 0, -1, -1}},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := deltaXY(tt.gx, tt.gy); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("deltaXY = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestDeathIntervals(t *testing.T) {
	tests := []struct {
		name  string
		alive []bool
		want  [][2]int
	}{
		{"always alive", []bool{true, true}, [][2]int{}},
		{"one death", []bool{true, false, false, true}, [][2]int{{-9, -7}}},
		{"dead at the end", []bool{true, false}, [][2]int{{-9, -8}}},
		{"two deaths", []bool{false, true, false, true}, [][2]int{{-10, -9}, {-8, -7}}},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := deathIntervals(tt.alive, -10); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("deathIntervals = %v, want %v", got, tt.want)
			}
		})
	}
}
