#include <databot.h>

int tPin = PD5;
int ePin = PD6;
int rLED = PD2;
int yLED = PD3;
int gLED = PD4;
int buzz = A0;
long tempDist = 0;
int num = 0;

void setup() {
  Serial.begin(9600);
  pinMode(tPin, OUTPUT);
  pinMode(ePin, INPUT);
  pinMode(rLED, OUTPUT);
  pinMode(yLED, OUTPUT);
  pinMode(gLED, OUTPUT);
}

void loop() {
  long dur, dist;
  digitalWrite(tPin, LOW);
  delayMicroseconds(2);
  digitalWrite(tPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(tPin, LOW);
  dur = pulseIn(ePin, HIGH);
  dist = (dur / 2) / 74;

  if (num >= 20) {
    digitalWrite(gLED, HIGH);
      digitalWrite(yLED, LOW);
      digitalWrite(rLED, LOW);
      Serial.println("green");
  } else {
    if (dist > 20) {
      digitalWrite(gLED, HIGH);
      digitalWrite(yLED, LOW);
      digitalWrite(rLED, LOW);
      Serial.println("green");
    } else if ((dist > 10) && (dist <= 20)) {
      digitalWrite(gLED, HIGH);
      digitalWrite(yLED, LOW);
      digitalWrite(rLED, LOW);
      Serial.println("green");
    } else if ((dist > 8) && (dist <= 10)) {
      digitalWrite(yLED, HIGH);
      digitalWrite(rLED, LOW);
      digitalWrite(gLED, LOW);
      
    } else if (dist <= 5) {
      digitalWrite(rLED, HIGH);
      digitalWrite(gLED, LOW);
      digitalWrite(yLED, LOW);
      Serial.println("red");
    }
  }

  tempDist = dist;
  delay(500);
}

void offAllLight() {
  digitalWrite(rLED, LOW);
  digitalWrite(gLED, LOW);
  digitalWrite(yLED, LOW);
}