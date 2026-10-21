package main

import (
	"errors"
	"testing"
)

func TestValidReplayURL(t *testing.T) {
	tests := []struct {
		name    string
		m       openDotaMatch
		want    string
		wantErr bool
	}{
		{"uses replay_url", openDotaMatch{ReplayURL: "http://replay202.valve.net/570/1_2.dem.bz2"}, "http://replay202.valve.net/570/1_2.dem.bz2", false},
		{"builds from cluster and salt", openDotaMatch{Cluster: 202, ReplaySalt: 237650183}, "http://replay202.valve.net/570/9046905170_237650183.dem.bz2", false},
		{"rejects missing salt", openDotaMatch{Cluster: 202}, "", true},
		{"rejects other hosts", openDotaMatch{ReplayURL: "http://evil.example/570/1_2.dem.bz2"}, "", true},
		{"rejects lookalike host", openDotaMatch{ReplayURL: "http://replay1.valve.net.evil.example/x"}, "", true},
		{"rejects https", openDotaMatch{ReplayURL: "https://replay1.valve.net/570/1_2.dem.bz2"}, "", true},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := validReplayURL(tt.m, "9046905170")
			if tt.wantErr != (err != nil) || got != tt.want {
				t.Fatalf("validReplayURL = %q, %v; want %q, err=%v", got, err, tt.want, tt.wantErr)
			}
			if err != nil && !errors.Is(err, errNoReplay) {
				t.Fatalf("error %v is not errNoReplay", err)
			}
		})
	}
}

func TestMatchIDPattern(t *testing.T) {
	for in, want := range map[string]bool{"9046905170": true, "": false, "12a": false, "1/../x": false, "1234567890123": false} {
		if got := matchIDPattern.MatchString(in); got != want {
			t.Errorf("matchIDPattern(%q) = %v, want %v", in, got, want)
		}
	}
}
