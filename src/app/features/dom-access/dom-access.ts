import { CommonModule } from '@angular/common'
import { Component, effect, ElementRef, signal, viewChild } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'
import { IconFieldModule } from 'primeng/iconfield'
import { InputIconModule } from 'primeng/inputicon'
import { InputTextModule } from 'primeng/inputtext'

@Component({
  selector: 'app-dom-access',
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DividerModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './dom-access.html',
  styleUrl: './dom-access.scss',
})
export class DomAccess {
  // 1. Signals-based ViewChild (ได้ค่าเป็น Signal เสมอ)
  videoPlayer = viewChild<ElementRef<HTMLVideoElement>>('videoPlayer')
  searchField = viewChild<ElementRef<HTMLInputElement>>('searchField')

  isPlaying = signal(false)

  constructor() {
    // 2. ใช้ Effect ในการจัดการ DOM เมื่อ View พร้อมใช้งาน
    effect(() => {
      const el = this.searchField()
      if (!el) return

      // Focus ทันทีที่หน้าจอโหลดเสร็จ
      el.nativeElement.focus()
    })
  }

  toggleVideo() {
    const video = this.videoPlayer()?.nativeElement
    if (!video) return

    if (video.paused) {
      video.play()
      this.isPlaying.set(true)
    } else {
      video.pause()
      this.isPlaying.set(false)
    }
  }

  focusSearch() {
    this.searchField()?.nativeElement.focus()
  }
}
