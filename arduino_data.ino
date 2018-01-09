int leftsensor = A2;
int rightsensor = A3;
int sensorValue1 = 0;
int sensorValue2 = 0;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  sensorValue1 = analogRead(leftsensor);
  sensorValue2 = analogRead(rightsensor);

  Serial.print(sensorValue1);
  Serial.println(sensorValue2);

  delay(10); 
}
