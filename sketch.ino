#include <SoftwareSerial.h>
SoftwareSerial SSerial(11,10); //6 RX e 7 TX
int stateUp = 0;
int stateDown = 0;
int stateLeft = 0;
int stateRight = 0;
char ch[3];

void setup() {
  Serial.begin(9600);
  while(!Serial) {}
  Serial.println("ok");
  SSerial.begin(9600);
   pinMode(3, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(13, OUTPUT);
}

void loop() {


    if (SSerial.available()){
      char ch = SSerial.read();
    if (ch == 'w') {
      if(stateUp ==0){
        digitalWrite(3, HIGH);
        Serial.println("ON UP");  
        stateUp=1;
        return;
      }
      if(stateUp ==1){
        digitalWrite(3, LOW);
        Serial.println("LOW UP");  
        stateUp=0;
      }
      
    }
    if (ch == 'a') {
       if(stateLeft ==0){
         digitalWrite(6, HIGH);
         Serial.println("ON LEFT");
         stateLeft=1;
         return;
      }
      if(stateLeft ==1){
        digitalWrite(6, LOW);
        Serial.println("LOW LEFT");  
        stateLeft=0;
      }
     
    }
      if (ch == 's') {
        if(stateDown == 0){
          digitalWrite(7, HIGH);
          Serial.println("ON DOWN");    
          stateDown = 1;
          return;
        }
        if(stateDown ==1){
          digitalWrite(7, LOW);
          Serial.println("OFF DOWN");    
          stateDown = 0; 
        }
      
    }
      if (ch == 'd') {
        if(stateRight == 0){
          digitalWrite(13, HIGH);
          Serial.println("ON RIGHT");
          stateRight = 1;  
          return;  
        }
        if(stateRight==1){
          digitalWrite(13, LOW);
          Serial.println("OFF RIGHT");
          stateRight = 0;  
        }
      
    }
}
 
}
