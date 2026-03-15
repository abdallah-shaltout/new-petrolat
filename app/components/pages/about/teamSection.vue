<template>
    <section class="padding-section bg-primary-50">
        <div class="container">
            <div class="flex-center flex-col gap-base sm:items-start">
                <div class="fc gap-base">
                    <span
                        class="w-1.5 h-1.5 rounded-full bg-primary-400"
                    ></span>
                    <span class="text-primary-700 text-sm">نخبة الأطباء</span>
                </div>
                <h2
                    class="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-primary-500 text-center sm:text-start font-bold max-w-xl leading-snug"
                >
                    تعرّف على الخبراء خلف سيتادل كلينك
                </h2>
            </div>

            <ul
                class="mt-10 grid grid-cols-3 gap-x-10 gap-y-20 lg:grid-cols-2 md:grid-cols-1 sm:gap-y-8"
            >
                <li
                    v-for="(doctor, idx) in allDoctors"
                    :key="doctor.id ?? idx"
                    class="self-stretch"
                >
                    <PagesDoctorsDoctorCard :doctor="doctor" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import { allDoctors } from "~/assets/data/doctor";
</script>
