import { CommonModule } from '@angular/common'
import { Component, computed, effect, inject, model, signal, untracked } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MessageService } from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'
import { InputNumberModule } from 'primeng/inputnumber'
import { ToastModule } from 'primeng/toast'

@Component({
  selector: 'app-counters',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ToastModule,
    DividerModule,
    InputNumberModule,
  ],
  providers: [MessageService],
  templateUrl: './counters.html',
  styleUrl: './counters.scss',
})
export class Counters {
  private messageService = inject(MessageService)

  // ใช้ signal
  count = signal(0)
  price = model(500)

  // 2. Computed Signal: คำนวณราคารวมอัตโนมัติ (Read-only)
  totalPrice = computed(() => this.count() * this.price())

  constructor() {
    // 3. Effect: ติดตามการเปลี่ยนแปลง
    effect(() => {
      // อ่านค่า count เพื่อให้ effect ทำงานเมื่อ count เปลี่ยนแปลง
      const currentCount = this.count()

      // เงื่อนไข: ถ้าตั๋วน้อยกว่า 10 ไม่ต้องทำอะไร
      if (currentCount < 10) return

      // อ่านค่า price โดยไม่ติดตามการเปลี่ยนแปลง (ไม่ทำให้ effect รันซ้ำ)
      const currentPrice = untracked(this.price)

      this.messageService.add({
        severity: 'warn',
        summary: 'Limit Reached',
        detail: `You've selected ${currentCount} tickets. Total at current rate: ฿${currentPrice}`,
        life: 3000,
      })
    })
  }

  increment() {
    this.count.update((count) => count + 1)
  }

  decrement() {
    this.count.update((count) => Math.max(0, count - 1))
  }

  reset() {
    this.count.set(0)
  }
}
