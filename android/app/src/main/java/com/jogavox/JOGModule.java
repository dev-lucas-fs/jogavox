package com.jogavox;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.*;


public class JOGModule extends ReactContextBaseJavaModule {
    JOGModule(ReactApplicationContext context) {
        super(context);
    }


    @Override
    public String getName() {
        return "JOGModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String ansiToUTF8(String path) {
        try {
            FileInputStream fis = new FileInputStream(path);
            InputStreamReader isr = new InputStreamReader(fis, "windows-1252"); // Codificação ANSI geralmente é windows-1252
            BufferedReader br = new BufferedReader(isr);

            FileOutputStream fos = new FileOutputStream(path);
            OutputStreamWriter osw = new OutputStreamWriter(fos, "UTF-8");
            BufferedWriter bw = new BufferedWriter(osw);

            String line;
            while ((line = br.readLine()) != null) {
                bw.write(line);
                bw.newLine();
            }

            br.close();
            bw.close();
        }   

        catch (Exception e) {
            return e.getMessage() + " DEU RUIM";
        }

        return "OK 2";
    }
}